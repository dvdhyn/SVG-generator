![logo](https://github.com/dvdhyn/svg-generator/assets/145178667/4b43004b-c374-4466-af58-eecb54218980)# SVG-Logo-Generator

## Table of Contents
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [My Goal](#my-goal)
* [Demonstration](#demonstration)

## User Story

```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```


## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## My Goal

    I will define a set of prompts using inquirer, then the user will input conditions and preferences for the logo they are creating.
    After all the questions have been answered, a new logo.svg file will be generated accordingly.
    

## Demonstration
https://watch.screencastify.com/v/vtxLfakAbWN2lPteHLOj

Here is an example of what may be produced:
![Uploa<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="black" />
    <text x="50" y="55" text-anchor="middle" fill="red" font-family="sans-serif" font-size="16">VAL</text>
    </svg>ding logo.svg…]()

