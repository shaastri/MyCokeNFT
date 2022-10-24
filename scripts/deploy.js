async function main() {
    const MyCokeNFT = await ethers.getContractFactory("MyCokeNFT");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myCokeNFT = await MyCokeNFT.deploy();
    console.log("Contract deployed to address:", myCokeNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    // Contract Address:0xD16a5B0CfDAA9526231EfD7af2528706c90865a8