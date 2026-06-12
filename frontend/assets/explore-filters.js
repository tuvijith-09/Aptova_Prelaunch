/* City → tier mapping and opportunity filter helpers for explore.html */
var CITY_TIERS = {
  '': { tier: null, label: '' },
  mumbai: { tier: 1, label: 'Tier-1' },
  delhi: { tier: 1, label: 'Tier-1' },
  bengaluru: { tier: 1, label: 'Tier-1' },
  hyderabad: { tier: 1, label: 'Tier-1' },
  chennai: { tier: 1, label: 'Tier-1' },
  kolkata: { tier: 1, label: 'Tier-1' },
  pune: { tier: 1, label: 'Tier-1' },
  ahmedabad: { tier: 1, label: 'Tier-1' },
  jaipur: { tier: 2, label: 'Tier-2' },
  lucknow: { tier: 2, label: 'Tier-2' },
  chandigarh: { tier: 2, label: 'Tier-2' },
  kochi: { tier: 2, label: 'Tier-2' },
  indore: { tier: 2, label: 'Tier-2' },
  nagpur: { tier: 2, label: 'Tier-2' },
  coimbatore: { tier: 2, label: 'Tier-2' },
  bhubaneswar: { tier: 2, label: 'Tier-2' },
  vadodara: { tier: 2, label: 'Tier-2' },
  surat: { tier: 2, label: 'Tier-2' },
  visakhapatnam: { tier: 2, label: 'Tier-2' },
  patna: { tier: 2, label: 'Tier-2' },
  guwahati: { tier: 2, label: 'Tier-2' },
  vijayawada: { tier: 2, label: 'Tier-2' },
  trivandrum: { tier: 2, label: 'Tier-2' },
  ludhiana: { tier: 2, label: 'Tier-2' },
  kanpur: { tier: 2, label: 'Tier-2' },
  madurai: { tier: 2, label: 'Tier-2' },
  nashik: { tier: 2, label: 'Tier-2' },
  ranchi: { tier: 3, label: 'Tier-3' },
  raipur: { tier: 3, label: 'Tier-3' },
  bhopal: { tier: 3, label: 'Tier-3' },
  dehradun: { tier: 3, label: 'Tier-3' },
  jodhpur: { tier: 3, label: 'Tier-3' },
  varanasi: { tier: 3, label: 'Tier-3' },
  mangalore: { tier: 3, label: 'Tier-3' },
  mysuru: { tier: 3, label: 'Tier-3' },
  srinagar: { tier: 3, label: 'Tier-3' },
  jammu: { tier: 3, label: 'Tier-3' },
  panaji: { tier: 3, label: 'Tier-3' },
  shimla: { tier: 3, label: 'Tier-3' },
  puducherry: { tier: 3, label: 'Tier-3' },
  shillong: { tier: 3, label: 'Tier-3' },
  agartala: { tier: 3, label: 'Tier-3' },
  aizawl: { tier: 3, label: 'Tier-3' },
  imphal: { tier: 3, label: 'Tier-3' },
  kohima: { tier: 3, label: 'Tier-3' },
  itanagar: { tier: 3, label: 'Tier-3' },
  gangtok: { tier: 3, label: 'Tier-3' },
  other: { tier: 3, label: 'Tier-3' }
};

function parseCapRupee(cap) {
  if (!cap) return 0;
  var s = String(cap).replace(/,/g, '').toLowerCase();
  if (s.indexOf('₹0') === 0 || s === '0') return 0;
  var mult = 1;
  if (s.indexOf('l') !== -1) mult = 100000;
  else if (s.indexOf('k') !== -1) mult = 1000;
  var num = parseFloat(s.replace(/[^\d.]/g, '')) || 0;
  return Math.round(num * mult);
}

function getOpportunityTiers(item) {
  var cap = item.capNum;
  if (['digital', 'campus', 'wow', 'creative', 'education'].indexOf(item.cat) !== -1 && cap <= 15000) {
    return [1, 2, 3];
  }
  if (cap >= 100000) return [1];
  if (cap >= 50000) return [1, 2];
  if (item.cat === 'agri' || item.cat === 'food') {
    if (cap >= 30000) return [2, 3];
    return [1, 2, 3];
  }
  if (item.cat === 'service' || item.cat === 'resell' || item.cat === 'planet') {
    return [1, 2, 3];
  }
  if (item.cat === 'health') return cap <= 10000 ? [1, 2, 3] : [1, 2];
  return [1, 2, 3];
}

function formatRupee(n) {
  if (n >= 100000) return '₹' + (n / 100000).toFixed(n % 100000 === 0 ? 0 : 1) + 'L';
  if (n >= 1000) return '₹' + Math.round(n / 1000) + 'K';
  return '₹' + n;
}

function enrichOpportunityData(data) {
  data.forEach(function (item) {
    item.capNum = parseCapRupee(item.cap);
    item.tiers = getOpportunityTiers(item);
  });
}
