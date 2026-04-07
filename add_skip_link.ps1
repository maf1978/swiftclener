$files = Get-ChildItem -Path "c:\Users\ferre\Desktop\swiftcleaning web 2026\swiftclean-ladies" -Filter *.html
$skipLink = '<a href="#main-content" class="skip-link">Skip to main content</a>'
$skipStyles = '<style>.skip-link { position: absolute; top: -40px; left: 0; background: #000; color: #fff; padding: 8px; z-index: 100; transition: top 0.3s; } .skip-link:focus { top: 0; }</style>'

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    # Add Skip Link at the beginning of body
    if ($content -notmatch 'class="skip-link"') {
        $content = $content -replace '<body>', "<body>`n    $skipLink"
    }
    
    # Add Skip Link Styles in head if not present
    if ($content -notmatch '\.skip-link') {
        $content = $content -replace '</head>', "    $skipStyles`n</head>"
    }
    
    [System.IO.File]::WriteAllText($file.FullName, $content)
}
