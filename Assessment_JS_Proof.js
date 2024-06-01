/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your NFTs
const nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(_name, _haircolor, _shirtcolor, _accessory) {
    const fungible = {
        name: _name,
        Haircolor: _haircolor,
        Shirtcolor: _shirtcolor,
        Accessory: _accessory
    };
    nftCollection.push(fungible);
    console.log("Minted: " + _name);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("\nID:\t\t" + (i + 1));
        console.log("Name:\t\t" + nftCollection[i].name);
        console.log("Haircolor:\t" + nftCollection[i].Haircolor);
        console.log("Shirtcolor:\t" + nftCollection[i].Shirtcolor);
        console.log("Accessory:\t" + nftCollection[i].Accessory);
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs minted: " + nftCollection.length);
}

// Call your functions below this line
mintNFT("Devansh", "Red", "White tshirt", "Silver ring");
mintNFT("Tanishka", "Black", "White tshirt", "Gold necklace");
mintNFT("Parth", "Green", "White tshirt", "Diamond ring");
mintNFT("Anirudh", "Blue", "White tshirt", "Gold ring");
listNFTs();
getTotalSupply();
