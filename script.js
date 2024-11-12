const box = document.querySelector(".box-shadow-generator .box");
const generateCodeBtn = document.querySelector(".box-shadow-generator .generate-code-btn");
const copyCodeBtn = document.querySelector(".box-shadow-generator .copy-code-btn");
const code = document.querySelector(".result .code pre code");
const controls = document.querySelectorAll(".box-shadow-generator .control");
 const main=document.getElementById("main")
const updateValues = () => {
    const xValue = document.querySelector("#x-value").value;
    const yValue = document.querySelector("#y-value").value;
    const blurValue = document.querySelector("#blur").value;
    const spreadValue = document.querySelector("#spread").value;
    const borderRadius = document.querySelector("#border-radius").value;
    const opacityValue = document.querySelector("#opacity").value;
    const colorValue = hexToRGBA(document.querySelector("#color").value, opacityValue);
    const boxColorValue = document.querySelector("#box-color").value;
    const insetValue = document.querySelector("#inset").checked;
   main.parentElement.style.background = document.getElementById('box-color').value
    box.style.backgroundColor = boxColorValue;
    box.style.borderRadius = `${borderRadius}px`;

    generateBoxShadow(xValue, yValue, blurValue, spreadValue, colorValue, insetValue);
};

const hexToRGBA = (hex, opacity) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return` rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const generateBoxShadow = (x, y, blur, spread, color, inset) => {
    const boxShadow = `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`;
    box.style.boxShadow = boxShadow;
    code.textContent = `box-shadow: ${boxShadow};`;
};

const generateCode = () => {
    updateValues();
    hljs.highlightAll();
};

const copyCodeToClipboard = () => {
    const codeText = code.textContent;
    navigator.clipboard.writeText(codeText).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Error copying code: ', err);
    });
};

controls.forEach(c => {
    c.addEventListener("input", updateValues);
});

// generateCodeBtn.addEventListener("click", generateCode);
copyCodeBtn.addEventListener("click", copyCodeToClipboard);

// Initialize with default values
updateValues();
