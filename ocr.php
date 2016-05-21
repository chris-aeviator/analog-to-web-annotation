<?php

require __DIR__ . '/vendor/autoload.php';
echo (new TesseractOCR('ocrMe.jpg'))
    ->lang('eng')
    ->psm(6)
    ->run();


    ?>
