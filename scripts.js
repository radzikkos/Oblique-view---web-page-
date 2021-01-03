function showTheory() {
    var theoryCore = document.getElementById("theoryCore");
    if (theoryCore.style.display === "block") {
        var moreTheory = document.getElementById("moreTheory");
        theoryCore.style.display = "none";
        moreTheory.style.display = "none";
    } else {
        theoryCore.style.display = "block";
        theoryCore.style.whiteSpace = "pre-line";
    }
}

function showMoreInformation() {
    var moreTheory = document.getElementById("moreTheory");
    if (moreTheory.style.display === "block") {
        moreTheory.style.display = "none";
    } else {
        moreTheory.style.display = "block";
        moreTheory.style.whiteSpace = "pre-line";
    }
}