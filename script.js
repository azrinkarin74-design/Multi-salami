function showSalami(amount) {
    // আগের বাটনগুলো লুকিয়ে ফেলা
    document.querySelector('.button-group').classList.add('hidden');
    document.querySelector('p').classList.add('hidden');
    
    // রেজাল্ট এরিয়া দেখানো
    const resultArea = document.getElementById('result-area');
    const msg = document.getElementById('message');
    const img = document.getElementById('funny-img');
    
    resultArea.classList.remove('hidden');

    if (amount === 100) {
        msg.innerText = "১০০ টাকা? এই নে কদবেল খা!";
        img.src = "kodbel.JEPG"; // তোমার ফোল্ডারে এই নামে ছবি থাকতে হবে
    } 
    else if (amount === 1000) {
        msg.innerText = "১০০০ টাকা? স্বপ্ন দেখা ভালো!";
        img.src = "dream.JEPG"; // তোমার ফোল্ডারে এই নামে ছবি থাকতে হবে
    } 
    else if (amount === 10000) {
        msg.innerText = "এত টাকা দিয়ে কী করবি? এই নে কাঁচকলা!";
        img.src = "funny.jpg"; // তোমার আগের ফানি ছবিটা
    }
}
function moveButton() {
    const btn = document.getElementById('jump-btn');
    
    // স্ক্রিনের চওড়া এবং উচ্চতা মেপে নেওয়া
    const x = Math.random() * (window.innerWidth - btn.clientWidth - 50);
    const y = Math.random() * (window.innerHeight - btn.clientHeight - 50);
    
    // বাটনটিকে নতুন পজিশনে পাঠিয়ে দেওয়া
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}
