Cat Clicker: Udacity Front End Web Developer Nanodegree
==========================

## Table of Contents

* [Purpose](#purpose)
* [How to Run](#how_to_run)

## Purpose

In this module, I wrote a program (instructions to follow) to develop my skills in Model-View-Octopus (MVO) programming. The goal was to create a program where the data (model) within the program was connected to the user-facing interface (view) by an intermediary called the octopus. The octopus allows the view to act on the model indirectly, to better preserve the integrity of the program as it grows. This also enables other users to understand the code, even without the programmer's guidance.

## How_to_run

 On opening index.html, the screen displays a row of buttons, followed by a "display area" with the name of the selected cat, the cat's image, and a number representing the number of times the cat has been clicked. Clicking the cat's image will increment the click count number by one. 

 Below this is an "admin" button which displays the "admin area" when clicked. This area shows input fields displaying the current cat's name, URL, and click count. These input fields can be edited by the user. Clicking "save" will update the current cat's database entry and hide the admin area. Clicking "cancel" will hide the admin area. The "admin" button will toggle the admin area hide/show on successive clicks.