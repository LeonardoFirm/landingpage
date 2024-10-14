<?php
function getPageTitle()
{
    $currentFile = basename($_SERVER['PHP_SELF'], ".php");

    switch ($currentFile) {
        case 'inicio':
            return 'Personal Trainer';
        default:
            return ucfirst($currentFile);
    }
}

echo "<title>" . getPageTitle() . "</title>";
?>