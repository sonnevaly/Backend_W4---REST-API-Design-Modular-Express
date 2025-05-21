let journalists = [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@newsco.com" },
    { id: 2, name: "Bob Martinez", email: "bob.martinez@newsco.com" },
    { id: 3, name: "Clara Lee", email: "clara.lee@newsco.com" },
];

const getAllJournalists = () => journalists;
const getJournalistById = (id) => journalists.find(j => j.id === parseInt(id));
const createJournalist = (journalistData) => {
    const newJournalist = { id: journalists.length + 1, ...journalistData };
    journalists.push(newJournalist);
    return newJournalist;
};
const updateJournalist = (id, journalistData) => {
    const journalist = journalists.find(j => j.id === parseInt(id));
    if (!journalist) return null;
    Object.assign(journalist, journalistData);
    return journalist;
};
const deleteJournalist = (id) => {
    const index = journalists.findIndex(j => j.id === parseInt(id));
    if (index === -1) return null;
    return journalists.splice(index, 1)[0];
};

export default {
    getAllJournalists,
    getJournalistById,
    createJournalist,
    updateJournalist,
    deleteJournalist,
};