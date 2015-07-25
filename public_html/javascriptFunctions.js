/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function startDownload(){
    
    xml = new XMLHttpRequest();
    xml.addEventListener("loadstart", transferStarted,false);
    xml.addEventListener("progress",updateProgress,false);
    xml.addEventListener("load",transferComplete,false);
    xml.addEventListener("error",transferFailed,false);
    xml.addEventListener("abort",transferCanceled,false);
    
    xml.open("get", "tdsskiller.exe",true);
    xml.send();
};

function transferStarted(evt){
    document.getElementById("download").disabled = true;
    console.log("download started");
}
function transferComplete(evt){
    console.log("download complete");
}
function transferFailed(evt){
    console.log("download Failed");
}
function transferCanceled(evt){
    console.log("download canceled");
}

function abort(){
    xml.abort();
    setProgressBar(0);
    setProgressBarValue(0,0);
}

function updateProgress (evt){
    if(evt.lengthComputable){
        var downloaded = (100 * evt.loaded)/evt.total;
        setProgressBar(downloaded);  // set the progress of the bar (%)
        setProgressBarValue(evt.total,evt.loaded); // set the MB already downloaded
    }else{
        downloaded.value = null;
        setProgressBar(downloaded);
        document.getElementById("valueProgressBar").innerHTML =  
                "file size unKnownk";
    }
} 
function setProgressBar(value){
    var progressBar = document.getElementById("progressBar");
    progressBar.value = value;
}

function setProgressBarValue(total, downloaded){
    var tot = total/(1024*1024); // set the MB misure
    var down = downloaded/(1024*1024);         
    document.getElementById("valueProgressBar").innerHTML =  Math.round(down*100)/100 + " MB di " + Math.round(tot*100)/100 + " MB";
    //innerHTML write in the <p> tag
    //math.round(down*100)/100---> tanti zeri, tante virgole dopo l'intero
}

