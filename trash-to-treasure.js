const smartGarbage = function(trash, bins) {
  if (trash === "recycling") {
    bins.recycling += 1;
  } else if (trash === "waste") {
    bins.waste += 1;
  } else if (trash === "compost") {
    bins.compost += 1;
  }
  console.log(bins);
};

smartGarbage('recycling', { waste: 4, recycling: 3, compost: 5 });