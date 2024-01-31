Firstly, a navigation bar is defined, comprising two sections: one for large screens "(<div class="navXl">) "
  and another for medium and small screens (<div class="navMd">).

The second part introduces a grid-structured layout within <section class="grid-container grid">. 
This section encompasses all other elements in the HTML document, aiming to establish a consistent structure and enhance CSS styling flexibility.
It achieves this by applying a background-color to every second grid item, adding fixed padding to all sections, and aligning the sections appropriately.

The <section class="grid-container grid"> is divided into several key parts:
  • HeadlinesSection: This serves as the primary focal point of the page.
  
  • GeneralInfoSection: Here, comprehensive information about the TBC x USAID collaboration is presented.
  
  • courseInfoSection: This section provides details about the courses. 
    The use of a grid helps align the cards, contributing to responsive design and maintaining consistency in item alignment.
    
  • projectPartners: In this section, information about project partners is presented. 
    It consists of two containers for creating transition slides. 
    Images in these containers are dynamically added using a JavaScript array object. 
    Additionally, two buttons facilitate slide navigation, complemented by dots for easy reference.
    
  • FAQSection: Frequently asked questions are available in this section. 
    Flexbox (display: flex) is employed for element alignment, enhancing flexibility in item positioning.
    
  • Footer: In this section, items are aligned differently for large and small screens. 
    The use of grid-template-area provides control over the alignment of items.
  
to see the project, please follow the link: https://maryamgvazava.github.io/TBCacademy/ 
