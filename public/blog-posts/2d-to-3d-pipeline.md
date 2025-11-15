For my undergraduate thesis, I worked on a project that transformed 2D architectural blueprints into interactive 3D building models. It was my first real experience building something end to end, a little chaotic, but deeply rewarding. I learned how separate tools could come together through code and how satisfying it was to see something static turn into something you could explore and interact with.

## How It Worked
The process started with 2D CAD drawings and ended with a 3D visualization in the browser. I used Autodesk Revit to extract geometry and metadata, Python scripts to process and convert the data into the correct formats, and the Xeokit SDK for rendering. Each building model came with its own surprises, from missing layers to broken coordinates and inconsistent metadata. Most of my time went into writing scripts that made all those imperfections coexist without crashing everything.

![Figure 1](/images/mck-closeup.png)
*Figure 1: Interactive wall-level selection within the 3D viewer, rendered using Xeokit.*

The final model wasn't just static geometry. You could click on individual walls, rooms, or floors and view their properties directly inside the browser. That interaction was what made the project feel real, not just a visualization, but a tool that people could use to explore space digitally.

## A Nice Surprise
It started as an undergraduate project, but it ended up traveling farther than I expected. The creator of Xeokit later featured my visualization in a presentation on research applications of the SDK (Xeokit OSArch 2021). Seeing my project appear alongside professional visualizations was a fun reminder that even early work can find its audience.

![Figure 2](/images/mck-slide.png)
*Figure 2: Slide from the Xeokit OSArch 2021 presentation featuring my project.*

## If I Were to Build It Again
There's so much I'd do differently now. I'd design a cleaner data pipeline, automate more of the CAD-to-IFC conversion process, and add richer metadata such as material details or energy metrics. Real-time collaboration could also make it useful for architectural teams beyond a demo setting. Still, as a first attempt at connecting software and spatial design, it did exactly what I needed, it taught me how to think like a systems engineer.

![Figure 3](/images/mck-full.png)
*Figure 3: Prototype interface for the interactive 3D model (undergraduate research).*

## What It Taught Me
Engineering isn't neat. Most of the work lives in the gaps of connecting mismatched formats, debugging data you didn't expect, and turning half-working prototypes into something repeatable. The project may have been rough, but it sparked the mindset I still rely on: build, test, iterate, and learn by doing.