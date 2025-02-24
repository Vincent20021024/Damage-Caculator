function calculateDamage() {
    let attack = parseFloat(document.getElementById("attack").value);
    let multiplier = parseFloat(document.getElementById("multiplier").value);
    let defense = parseFloat(document.getElementById("defense").value);

    let damage = (attack * multiplier) - defense;
    damage = damage > 0 ? damage : 0; // 確保傷害不為負數

    document.getElementById("result").textContent = damage;
}
