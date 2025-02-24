function calculateDamage() {
    let attack = parseFloat(document.getElementById("attack").value);
    let multiplier = parseFloat(document.getElementById("multiplier").value);
    let defense = parseFloat(document.getElementById("defense").value);
    let critRate = parseFloat(document.getElementById("critRate").value) / 100; // 轉換為百分比
    let critDamage = parseFloat(document.getElementById("critDamage").value) / 100;
    let elementalBonus = parseFloat(document.getElementById("elementalBonus").value);

    let critMultiplier = 1 + (critRate * critDamage);
    let damage = (attack * multiplier * critMultiplier) - defense + elementalBonus;
    damage = damage > 0 ? damage : 0;

    document.getElementById("result").textContent = damage.toFixed(2);
}
