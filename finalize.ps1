$files = Get-ChildItem -Path "c:\Users\ferre\Desktop\swiftcleaning web 2026\swiftclean-ladies" -Filter *.html
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    # Update logo alt text
    $content = $content -replace 'alt="Swiftclean Ladies"', 'alt="Swiftclean Ladies Logo"'
    # Update hamburger button for accessibility
    $content = $content -replace '<button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">', '<button class="hamburger" id="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="main-nav">'
    # Update hamburger spans
    if ($content -match '<span></span><span></span><span></span>') {
        $content = $content -replace '<span></span><span></span><span></span>', '<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>'
    }
    # Finalize absolute path replacements
    $content = $content -replace 'href="/style.css"', 'href="style.css"'
    $content = $content -replace 'href="/index.html"', 'href="index.html"'
    if ($content -match 'href="/"') {
        $content = $content -replace 'href="/"', 'href="index.html"'
    }
    $content = $content -replace 'href="/about.html"', 'href="about.html"'
    $content = $content -replace 'href="/services.html"', 'href="services.html"'
    $content = $content -replace 'href="/contact.html"', 'href="contact.html"'
    $content = $content -replace 'href="/booking.html"', 'href="booking.html"'
    $content = $content -replace 'href="/faq.html"', 'href="faq.html"'
    $content = $content -replace 'href="/recurring-cleaning.html"', 'href="recurring-cleaning.html"'
    $content = $content -replace 'href="/one-time-cleaning.html"', 'href="one-time-cleaning.html"'
    $content = $content -replace 'href="/deep-cleaning.html"', 'href="deep-cleaning.html"'
    $content = $content -replace 'href="/commercial-cleaning.html"', 'href="commercial-cleaning.html"'
    $content = $content -replace 'href="/organizational-services.html"', 'href="organizational-services.html"'
    $content = $content -replace 'href="/privacy-policy.html"', 'href="privacy-policy.html"'
    $content = $content -replace 'href="/terms-conditions.html"', 'href="terms-conditions.html"'
    # Fix src path if they start with /images/
    $content = $content -replace 'src="/images/', 'src="images/'
    
    [System.IO.File]::WriteAllText($file.FullName, $content)
}
