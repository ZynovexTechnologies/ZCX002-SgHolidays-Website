Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function New-ColorFromHex {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Hex,
    [int]$Alpha = 255
  )

  $normalized = $Hex.TrimStart("#")
  if ($normalized.Length -ne 6) {
    throw "Expected a 6-digit hex color, got '$Hex'."
  }

  return [System.Drawing.Color]::FromArgb(
    $Alpha,
    [Convert]::ToInt32($normalized.Substring(0, 2), 16),
    [Convert]::ToInt32($normalized.Substring(2, 2), 16),
    [Convert]::ToInt32($normalized.Substring(4, 2), 16)
  )
}

function Save-PngIcon {
  param(
    [Parameter(Mandatory = $true)]
    [System.Drawing.Image]$Image,
    [Parameter(Mandatory = $true)]
    [string]$Path,
    [int]$Size = 256
  )

  $iconBitmap = [System.Drawing.Bitmap]::new($Size, $Size)
  $graphics = [System.Drawing.Graphics]::FromImage($iconBitmap)
  $memoryStream = [System.IO.MemoryStream]::new()
  $fileStream = $null
  $writer = $null

  try {
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.Clear([System.Drawing.Color]::Transparent)
    $graphics.DrawImage($Image, 0, 0, $Size, $Size)

    $iconBitmap.Save($memoryStream, [System.Drawing.Imaging.ImageFormat]::Png)
    $pngBytes = $memoryStream.ToArray()

    $fileStream = [System.IO.File]::Create($Path)
    $writer = [System.IO.BinaryWriter]::new($fileStream)

    $writer.Write([UInt16]0)
    $writer.Write([UInt16]1)
    $writer.Write([UInt16]1)
    $writer.Write([byte]0)
    $writer.Write([byte]0)
    $writer.Write([byte]0)
    $writer.Write([byte]0)
    $writer.Write([UInt16]1)
    $writer.Write([UInt16]32)
    $writer.Write([UInt32]$pngBytes.Length)
    $writer.Write([UInt32]22)
    $writer.Write($pngBytes)
  }
  finally {
    if ($writer) {
      $writer.Dispose()
    }
    if ($fileStream) {
      $fileStream.Dispose()
    }
    $memoryStream.Dispose()
    $graphics.Dispose()
    $iconBitmap.Dispose()
  }
}

function New-RoundedRectanglePath {
  param(
    [float]$X,
    [float]$Y,
    [float]$Width,
    [float]$Height,
    [float]$Radius
  )

  $diameter = $Radius * 2
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()

  $path.AddArc($X, $Y, $diameter, $diameter, 180, 90)
  $path.AddArc($X + $Width - $diameter, $Y, $diameter, $diameter, 270, 90)
  $path.AddArc($X + $Width - $diameter, $Y + $Height - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($X, $Y + $Height - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()

  return $path
}

function Save-OpenGraphImage {
  param(
    [Parameter(Mandatory = $true)]
    [string]$BackgroundPath,
    [Parameter(Mandatory = $true)]
    [string]$LogoPath,
    [Parameter(Mandatory = $true)]
    [string]$OutputPath
  )

  $width = 1200
  $height = 630
  $bitmap = [System.Drawing.Bitmap]::new($width, $height)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

  $backgroundImage = $null
  $logoImage = $null
  $overlayBrush = $null
  $panelPath = $null
  $panelBrush = $null
  $panelStroke = $null
  $accentBrush = $null
  $shadowBrush = $null
  $labelBrush = $null
  $headlineBrush = $null
  $bodyBrush = $null
  $accentPen = $null
  $labelFont = $null
  $headlineFont = $null
  $bodyFont = $null
  $footerFont = $null
  $bodyFormat = $null

  try {
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    $backgroundImage = [System.Drawing.Image]::FromFile($BackgroundPath)
    $logoImage = [System.Drawing.Image]::FromFile($LogoPath)

    $sourceRatio = $backgroundImage.Width / $backgroundImage.Height
    $targetRatio = $width / $height

    if ($sourceRatio -gt $targetRatio) {
      $cropHeight = $backgroundImage.Height
      $cropWidth = $cropHeight * $targetRatio
      $cropX = ($backgroundImage.Width - $cropWidth) / 2
      $cropY = 0
    }
    else {
      $cropWidth = $backgroundImage.Width
      $cropHeight = $cropWidth / $targetRatio
      $cropX = 0
      $cropY = ($backgroundImage.Height - $cropHeight) / 2
    }

    $graphics.DrawImage(
      $backgroundImage,
      [System.Drawing.Rectangle]::new(0, 0, $width, $height),
      [float]$cropX,
      [float]$cropY,
      [float]$cropWidth,
      [float]$cropHeight,
      [System.Drawing.GraphicsUnit]::Pixel
    )

    $overlayBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
      [System.Drawing.PointF]::new(0, 0),
      [System.Drawing.PointF]::new(0, $height),
      (New-ColorFromHex "#05160f" 212),
      (New-ColorFromHex "#08261d" 152)
    )
    $graphics.FillRectangle($overlayBrush, 0, 0, $width, $height)

    $accentBrush = [System.Drawing.SolidBrush]::new((New-ColorFromHex "#d6b06a" 34))
    $graphics.FillEllipse($accentBrush, 794, -132, 480, 480)
    $graphics.FillEllipse($accentBrush, 922, 368, 246, 246)

    $panelPath = New-RoundedRectanglePath -X 56 -Y 54 -Width 620 -Height 522 -Radius 34
    $panelBrush = [System.Drawing.SolidBrush]::new((New-ColorFromHex "#071b14" 128))
    $panelStroke = [System.Drawing.Pen]::new((New-ColorFromHex "#ffffff" 34), 2)
    $graphics.FillPath($panelBrush, $panelPath)
    $graphics.DrawPath($panelStroke, $panelPath)

    $graphics.DrawImage($logoImage, 86, 86, 148, 148)

    $labelFont = [System.Drawing.Font]::new("Segoe UI", 22, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $headlineFont = [System.Drawing.Font]::new("Segoe UI", 68, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $bodyFont = [System.Drawing.Font]::new("Segoe UI", 29, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
    $footerFont = [System.Drawing.Font]::new("Segoe UI", 24, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

    $labelBrush = [System.Drawing.SolidBrush]::new((New-ColorFromHex "#d6b06a"))
    $headlineBrush = [System.Drawing.SolidBrush]::new((New-ColorFromHex "#fff9ef"))
    $bodyBrush = [System.Drawing.SolidBrush]::new((New-ColorFromHex "#eef6f1"))
    $shadowBrush = [System.Drawing.SolidBrush]::new((New-ColorFromHex "#03110c" 92))
    $accentPen = [System.Drawing.Pen]::new((New-ColorFromHex "#d6b06a"), 5)
    $accentPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $accentPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

    $bodyFormat = [System.Drawing.StringFormat]::new()
    $bodyFormat.FormatFlags = [System.Drawing.StringFormatFlags]::LineLimit

    $graphics.DrawString("VAGAMON, KERALA", $labelFont, $labelBrush, 256, 103)
    $graphics.DrawString("SG Holidays", $headlineFont, $shadowBrush, 82, 238)
    $graphics.DrawString("SG Holidays", $headlineFont, $headlineBrush, 76, 230)

    $graphics.DrawLine($accentPen, 80, 319, 224, 319)

    $graphics.DrawString(
      "Resort stays, jeep safari rides, and curated tour packages with one booking partner in Vagamon.",
      $bodyFont,
      $bodyBrush,
      [System.Drawing.RectangleF]::new(80, 348, 540, 132),
      $bodyFormat
    )

    $graphics.DrawString("Call +91 82819 95008", $footerFont, $headlineBrush, 80, 514)
    $graphics.DrawString("Direct bookings for couples, families, and groups", $footerFont, $bodyBrush, 360, 514)

    $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  }
  finally {
    if ($bodyFormat) {
      $bodyFormat.Dispose()
    }
    if ($footerFont) {
      $footerFont.Dispose()
    }
    if ($bodyFont) {
      $bodyFont.Dispose()
    }
    if ($headlineFont) {
      $headlineFont.Dispose()
    }
    if ($labelFont) {
      $labelFont.Dispose()
    }
    if ($accentPen) {
      $accentPen.Dispose()
    }
    if ($bodyBrush) {
      $bodyBrush.Dispose()
    }
    if ($headlineBrush) {
      $headlineBrush.Dispose()
    }
    if ($labelBrush) {
      $labelBrush.Dispose()
    }
    if ($shadowBrush) {
      $shadowBrush.Dispose()
    }
    if ($accentBrush) {
      $accentBrush.Dispose()
    }
    if ($panelStroke) {
      $panelStroke.Dispose()
    }
    if ($panelBrush) {
      $panelBrush.Dispose()
    }
    if ($panelPath) {
      $panelPath.Dispose()
    }
    if ($overlayBrush) {
      $overlayBrush.Dispose()
    }
    if ($logoImage) {
      $logoImage.Dispose()
    }
    if ($backgroundImage) {
      $backgroundImage.Dispose()
    }
    $graphics.Dispose()
    $bitmap.Dispose()
  }
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$publicDir = Join-Path $repoRoot "public"
$assetsDir = Join-Path $publicDir "assets"

New-Item -ItemType Directory -Path $assetsDir -Force | Out-Null

$pngPath = Join-Path $assetsDir "logo-sg-holidays.png"
$touchIconPath = Join-Path $publicDir "apple-touch-icon.png"
$faviconPath = Join-Path $publicDir "favicon.ico"
$ogImagePath = Join-Path $publicDir "og-sg-holidays.png"

$canvasSize = 512
$bitmap = [System.Drawing.Bitmap]::new($canvasSize, $canvasSize)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

$shadowBrush = $null
$badgeBrush = $null
$rimPen = $null
$innerRimPen = $null
$mountainShadowPen = $null
$mountainPen = $null
$accentPen = $null
$roadShadowPen = $null
$roadPen = $null
$sunBrush = $null
$sunHaloPen = $null
$textShadowBrush = $null
$textBrush = $null
$format = $null
$font = $null

try {
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $graphics.Clear([System.Drawing.Color]::Transparent)

  $shadowBrush = [System.Drawing.SolidBrush]::new((New-ColorFromHex "#04120d" 38))
  $graphics.FillEllipse($shadowBrush, 54, 68, 404, 404)

  $badgeBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.PointF]::new(92, 54),
    [System.Drawing.PointF]::new(420, 456),
    (New-ColorFromHex "#071b14"),
    (New-ColorFromHex "#1d5c48")
  )
  $graphics.FillEllipse($badgeBrush, 42, 42, 428, 428)

  $rimPen = [System.Drawing.Pen]::new((New-ColorFromHex "#d6b06a"), 12)
  $innerRimPen = [System.Drawing.Pen]::new((New-ColorFromHex "#ffffff" 72), 3)
  $graphics.DrawEllipse($rimPen, 42, 42, 428, 428)
  $graphics.DrawEllipse($innerRimPen, 56, 56, 400, 400)

  $sunBrush = [System.Drawing.SolidBrush]::new((New-ColorFromHex "#e7c17b"))
  $sunHaloPen = [System.Drawing.Pen]::new((New-ColorFromHex "#fff4df" 120), 4)
  $graphics.FillEllipse($sunBrush, 338, 112, 58, 58)
  $graphics.DrawEllipse($sunHaloPen, 330, 104, 74, 74)

  $mountainPoints = [System.Drawing.PointF[]]@(
    [System.Drawing.PointF]::new(126, 252),
    [System.Drawing.PointF]::new(188, 176),
    [System.Drawing.PointF]::new(246, 228),
    [System.Drawing.PointF]::new(311, 154),
    [System.Drawing.PointF]::new(392, 252)
  )

  $accentPoints = [System.Drawing.PointF[]]@(
    [System.Drawing.PointF]::new(238, 226),
    [System.Drawing.PointF]::new(281, 194),
    [System.Drawing.PointF]::new(334, 228)
  )

  $mountainShadowPen = [System.Drawing.Pen]::new((New-ColorFromHex "#04120d" 55), 24)
  $mountainShadowPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $mountainShadowPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $mountainShadowPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round

  $mountainPen = [System.Drawing.Pen]::new((New-ColorFromHex "#fff7ed"), 16)
  $mountainPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $mountainPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $mountainPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round

  $accentPen = [System.Drawing.Pen]::new((New-ColorFromHex "#d6b06a"), 8)
  $accentPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $accentPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $accentPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round

  $graphics.DrawLines($mountainShadowPen, $mountainPoints)
  $graphics.DrawLines($mountainPen, $mountainPoints)
  $graphics.DrawLines($accentPen, $accentPoints)

  $roadShadowPen = [System.Drawing.Pen]::new((New-ColorFromHex "#04120d" 65), 18)
  $roadShadowPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $roadShadowPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $roadPen = [System.Drawing.Pen]::new((New-ColorFromHex "#e7c17b"), 12)
  $roadPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $roadPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

  $graphics.DrawBezier(
    $roadShadowPen,
    [System.Drawing.PointF]::new(144, 366),
    [System.Drawing.PointF]::new(186, 328),
    [System.Drawing.PointF]::new(304, 398),
    [System.Drawing.PointF]::new(372, 348)
  )
  $graphics.DrawBezier(
    $roadPen,
    [System.Drawing.PointF]::new(144, 362),
    [System.Drawing.PointF]::new(186, 324),
    [System.Drawing.PointF]::new(304, 394),
    [System.Drawing.PointF]::new(372, 344)
  )

  $font = [System.Drawing.Font]::new("Segoe UI", 150, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $format = [System.Drawing.StringFormat]::new()
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center

  $textShadowBrush = [System.Drawing.SolidBrush]::new((New-ColorFromHex "#04120d" 78))
  $textBrush = [System.Drawing.SolidBrush]::new((New-ColorFromHex "#fff8ef"))

  $graphics.DrawString("SG", $font, $textShadowBrush, [System.Drawing.RectangleF]::new(91, 218, 332, 150), $format)
  $graphics.DrawString("SG", $font, $textBrush, [System.Drawing.RectangleF]::new(84, 210, 332, 150), $format)

  $bitmap.Save($pngPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bitmap.Save($touchIconPath, [System.Drawing.Imaging.ImageFormat]::Png)
  Save-PngIcon -Image $bitmap -Path $faviconPath
  Save-OpenGraphImage -BackgroundPath (Join-Path $assetsDir "hero-forest-cabin.jpg") -LogoPath $pngPath -OutputPath $ogImagePath
}
finally {
  if ($format) {
    $format.Dispose()
  }
  if ($font) {
    $font.Dispose()
  }
  if ($textBrush) {
    $textBrush.Dispose()
  }
  if ($textShadowBrush) {
    $textShadowBrush.Dispose()
  }
  if ($sunHaloPen) {
    $sunHaloPen.Dispose()
  }
  if ($sunBrush) {
    $sunBrush.Dispose()
  }
  if ($roadPen) {
    $roadPen.Dispose()
  }
  if ($roadShadowPen) {
    $roadShadowPen.Dispose()
  }
  if ($accentPen) {
    $accentPen.Dispose()
  }
  if ($mountainPen) {
    $mountainPen.Dispose()
  }
  if ($mountainShadowPen) {
    $mountainShadowPen.Dispose()
  }
  if ($innerRimPen) {
    $innerRimPen.Dispose()
  }
  if ($rimPen) {
    $rimPen.Dispose()
  }
  if ($badgeBrush) {
    $badgeBrush.Dispose()
  }
  if ($shadowBrush) {
    $shadowBrush.Dispose()
  }
  $graphics.Dispose()
  $bitmap.Dispose()
}

Write-Output "Generated $pngPath"
Write-Output "Generated $touchIconPath"
Write-Output "Generated $faviconPath"
Write-Output "Generated $ogImagePath"
