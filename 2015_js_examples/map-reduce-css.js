const hyphenatedCssNames = [
    "background-attachment", "background-blend-mode", "background-color",
    "background-image", "background-position", "background-repeat",
    "background-clip", "background-origin", "background-size",
    "border", "border-bottom", "border-bottom-color",
    "border-bottom-left-radius", "border-bottom-right-radius",
    "border-bottom-style", "border-bottom-width", "border-color",
    "border-image", "border-image-outset", "border-image-repeat",
    "border-image-slice", "border-image-source", "border-image-width",
    "border-left", "border-left-color", "border-left-style", "border-left-width",
    "border-radius", "border-right", "border-right-color", "border-right-style",
    "border-right-width", "border-style", "border-top", "border-top-color",
    "border-top-left-radius", "border-top-right-radius", "border-top-style",
    "border-top-width", "border-width", "box-decoration-break", "box-shadow",
    "clear", "clip", "display", "float", "height", "left", "margin", "margin-bottom",
    "margin-left", "margin-right", "margin-top", "max-height", "max-width", "min-height",
    "min-width", "overflow", "overflow-x", "overflow-y", "padding", "padding-bottom",
    "padding-left", "padding-right", "padding-top", "position", "right", "top",
    "visibility", "width", "vertical-align", "z-index","align-items", "align-self",
    "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink",
    "flex-wrap", "justify-content", "order"
];

const upcase = (word) => {
    return word[0].toUpperCase() + word.slice(1);
}

const mapCamel = (props) => {
    return props[0] + props.slice(1).map(upcase).join('')
}


const camelCase = (cssProp) => {
    let props = cssProp.split('-');
    return props.length > 1 ? mapCamel(props) : cssProp;
}

const camelCaseCSS = hyphenatedCssNames.map(camelCase)

console.log('camelCaseCSS', camelCaseCSS)