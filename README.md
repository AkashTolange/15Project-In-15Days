<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typewriter Effect</title>
    <style>
        #typewriter {
            font-family: monospace;
            font-size: 24px;
            white-space: nowrap;
            overflow: hidden;
            border-right: 0.15em solid orange;
            animation: caret 0.75s step-end infinite;
        }

        @keyframes caret {
            from, to {
                border-color: transparent;
            }
            50% {
                border-color: orange;
            }
        }
    </style>
</head>
<body>
    <div id="typewriter"></div>

    <script>
        const text = '15projects-in15Days';
        let index = 0;

        function type() {
            if (index < text.length) {
                document.getElementById('typewriter').innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 150); // Adjust the delay to control typing speed
            }
        }

        window.onload = type;
    </script>
</body>
</html>
This repository features 15 beginner-friendly projects, created over 15 days, utilizing HTML, CSS, and JavaScript. These projects are perfect for newcomers to web development looking to enhance their skills and gain hands-on experience.
List of projects are:
1.Landing page
2.Age calculator
3.counterapp
4.create image gallery
5.currency converter
6.Dark mode for websites
7.Digital Clock
8.github profile searcher
9.Letter hover effect
10.nepali age calulator
11.qr code generator and download image
12.stopwatch
13.strong password generator
14.tic tac toe game
15.todo-list
