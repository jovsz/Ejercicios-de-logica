function landMass(name, area) {
    //Implementación    
    const worldMasa = 148940000;
    let info = [];
    if(area){
        let percent = (area*100)/worldMasa;
        const floatNum = parseFloat(percent);
        info = [{percent: `${floatNum}`, message: `${name} representa el ${floatNum}% de la masa de la tierra`}]
        return info[0];
    }
    return 0;
}


module.exports = landMass;