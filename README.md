# Pictroid-Doc

## About
This is the documentation for a [school project](https://github.com/elHornair/pictroid). It was written with plain web
technologies and can be compiled with [Prince](http://www.princexml.com/). It was only tested with Prince version 8.1 rev 5.

## Compilation
- Install [Prince](http://www.princexml.com/)
- Compile the doc using prince. If you use gnome, the following command is pretty handy:

    prince --javascript index.html && gnome-open index.pdf

## Cut first page (dummy page)
- gs -sDEVICE=pdfwrite -dNOPAUSE -dBATCH -dSAFER -dFirstPage=2 -dLastPage=27 -sOutputFile=documentation_final.pdf index.pdf
- gs -sDEVICE=pdfwrite -dNOPAUSE -dBATCH -dSAFER -dFirstPage=2 -dLastPage=2 -sOutputFile=abstract_final.pdf abstract.pdf

