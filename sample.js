export function printDetails(student) {
  const { name, score, batch } = student;
  return name + " has got " + score + " and he belongs to " + batch;
}
