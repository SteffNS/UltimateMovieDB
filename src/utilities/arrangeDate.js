const arrangeDate = (str) => {
    const timeFormat = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(str).toLocaleDateString([],timeFormat);
}

export default arrangeDate;