import os

def generate_multiple_galleries(section_folders):
    """
    Generates an HTML file with multiple sections, each containing a grid of images
    based on the provided folder paths.

    Args:
        section_folders (dict): A dictionary where keys are section titles and values are folder paths.

    Returns:
        str: Full HTML content with dynamically generated sections for each folder.
    """
    sections_html = ""

    # Loop through each section and its folder
    for section_title, folder_path in section_folders.items():
        try:
            # List all valid image files in the folder
            images = [f for f in os.listdir(folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp'))]
        except FileNotFoundError:
            sections_html += f"<section class='gallery-section'><h1>{section_title}</h1><p>Error: Folder '{folder_path}' not found.</p></section>"
            continue

        # Generate grid HTML for the section
        grid_html = ""
        for image in images:
            alt_text = os.path.splitext(image)[0]  # Use the filename (without extension) as alt text
            grid_html += f"""         <div class="image-container">
            <img src='{folder_path}/{image}' alt='{alt_text}' class='grid-image' onclick='openPopup(this)'>
            <div class="overlay-text"></div>
            </div>
            """

        # Add the section HTML
        sections_html += f"""
        <div id="filler2"></div>
        <section class="gallery-section">
            <h1>{section_title}</h1>
            <p></p>
            <div class="grid">
{grid_html}            </div>
        </section>
        """

    # Full HTML content
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Galleries</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="css/global.css">
  <link rel="stylesheet" href="css/gallery.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <nav>
        <div class="nav-container">
          <a href="homepage.html" class="logo">Home</a>
          <button class="hamburger" aria-label="Toggle navigation">☰</button>
          <div class="nav-links">
            <a href="people.html">People</a>
            <a href="landscapes.html">Landscapes</a>
            <a href="about.html">About</a>
          </div>
        </div>
    </nav>
  </header>

  <main>
  <section id="title-section2">
        
        <h1>Landscapes!</h1>
        <h2>Some of the coolest places I've been!</h2>
        <a href=".gallery-section" >
        <img class="skip-button" src="icons/down-arrow-svgrepo-com.svg" alt="Skip to main section" />
        </a>
    </section>
{sections_html}
<div class="back-to-top" id="backToTop">
        ↑ Back to Top
      </div>
  </main>
    <!-- Popup for Enlarged Image -->
  <div id="image-popup" class="popup">
    <span class="close-popup" onclick="closePopup()">×</span>
    <div class="img-caption">
        <img class="popup-image" id="popup-image" src="" alt="{alt_text}">
        <p>{alt_text}</p>
    </div>
  </div>


  <footer>
    <a href="mailto:wangemi@umich.edu" aria-label="Send an email">
      <img class="email-button" src="icons/email-svgrepo-com.svg" alt="Email Me" />
    </a>
    <p class="copyright">© 2024 Emily Wang. Coded with Javascript, Python, and HTML/CSS.</p>
  </footer>

  <script src="../js/modal.js"></script>
</body>
</html>"""
    return html_content


# Example Usage
if __name__ == "__main__":
    # Define section titles and their corresponding image folder paths
    section_folders = {
        "Europe": "images/landscape/eu",
        "Asia": "images/landscape/a",
        "US": "images/landscape/us",
    }

    # Generate the HTML
    html_output = generate_multiple_galleries(section_folders)

    # Save the output to an HTML file
    with open("landscapes.html", "w", encoding="utf-8") as file:
        file.write(html_output)

    print("HTML file generated successfully: landscapes.html")
