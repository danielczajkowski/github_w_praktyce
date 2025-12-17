export const humanizeDate = (date) => {
  const diff = Math.floor((new Date() - new Date(date)) / 1000);

  if (diff < 60) {
    return 'just now';
  }

  const units = [
    { name: 'year', seconds: 31536000 },
    { name: 'month', seconds: 2592000 },
    { name: 'week', seconds: 604800 },
    { name: 'day', seconds: 86400 },
    { name: 'hour', seconds: 3600 },
    { name: 'minute', seconds: 60 },
  ];

  for (const unit of units) {
    const quotient = Math.floor(diff / unit.seconds);
    if (quotient >= 1) {
      return `${quotient} ${unit.name}${quotient > 1 ? 's' : ''} ago`;
    }
  }
};
