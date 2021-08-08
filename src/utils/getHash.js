const getHash = () => location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/"; 

// ["", "1", ""] --> Está cogiendo el "1".

// Si no hacemos esto, el resultado sería #/1/

export default getHash;
