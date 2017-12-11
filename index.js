module.exports = function(time_zone_string, reference = new Date()) {
  var target_time = parseInt(reference.toLocaleTimeString(undefined, {timeZone: time_zone_string }).substring(0, 2)),
    target_date = new Date(reference.toLocaleDateString(undefined, {timeZone: time_zone_string})),
    reference_time = parseInt(reference.toLocaleTimeString().substring(0, 2)),
    reference_date = new Date(reference.toLocaleDateString()),
    reference_time_zone_offset = reference.getTimezoneOffset() / 60;
  if (target_date > reference_date) {
     target_time += 24;
  } else if (target_date < reference_date) {
     reference_time += 24;
  }
      
  return target_time - reference_time + (-1 * reference_time_zone_offset);
};
