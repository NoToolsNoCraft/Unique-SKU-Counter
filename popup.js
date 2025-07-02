document.getElementById('countBtn').addEventListener('click', () => {
  const input = document.getElementById('skuInput').value;

  let skuArray = input.split(/\r?\n/);

  skuArray = skuArray.map(sku => sku.trim().replace(/[\u200B-\u200D\uFEFF]/g, ''));
  skuArray = skuArray.filter(sku => sku !== '');

  const uniqueSkus = [...new Set(skuArray)];

  document.getElementById('resultHeader').textContent = `Unique SKUs: ${uniqueSkus.length}`;

  const list = document.getElementById('uniqueList');
  list.innerHTML = '';

  uniqueSkus.forEach(sku => {
    const li = document.createElement('li');
    li.textContent = sku;
    list.appendChild(li);
  });

  console.log('Unique SKUs:', uniqueSkus);
});

// Smooth scroll to app section on CTA button click
document.getElementById('ctaBtn').addEventListener('click', () => {
  document.getElementById('appSection').scrollIntoView({ behavior: 'smooth' });
});
