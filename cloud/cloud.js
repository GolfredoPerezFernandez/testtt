/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

  Moralis.Cloud.define("getCootiesSongbird", async (request) => {
      const query = new Parse.Query("ItemsMintedSongbird");
    query.equalTo("owner",request.params.owner)
    const queryResults = await query.find();
  
    const results=[]
    for (let i = 0; i < queryResults.length; ++i) {
        
      results.push({
      "name":queryResults[i].attributes.name,
      "metadataFilePath":queryResults[i].attributes.metadataFilePath,
      "planetId":queryResults[i].attributes.planetId,
      "tokenId":queryResults[i].attributes.tokenId,
      "owner":queryResults[i].attributes.owner,
      "image":queryResults[i].attributes.image,
      "tokenAddress":queryResults[i].attributes.tokenAddress,
      "description":queryResults[i].attributes.tokenAddress,
      });
    }
    return results
  });

  Moralis.Cloud.define("getTotalCootiesSongbird", async (request) => {
    
    const query = new Moralis.Query("ItemsMintedSongbird");
      
      return query.count();
  });

  Moralis.Cloud.define("getMyCootiesIdSongbird", async (request) => {
    const query = new Moralis.Query("ItemsMintedSongbird");
 query.equalTo("owner",request.params.owner)
    const queryResults = await query.find({useMasterKey:true});
      const results=[]
      for (let i = 0; i < queryResults.length; ++i) {
        
        results.push({
          "name":queryResults[i].attributes.name,
          "owner":queryResults[i].attributes.owner,
          "tokenId":queryResults[i].attributes.cootieId,
          "description":queryResults[i].attributes.description,
          "metadataFilePath":queryResults[i].attributes.metadataFilePath,
          "tokenAddress":queryResults[i].attributes.tokenAddress,
          "image":queryResults[i].attributes.image,

      });
      }
      return results
 })
  Moralis.Cloud.define("getAllItemsSongbird", async (request) => {
    const query = new Moralis.Query("ItemsMintedSongbird");
 
    const queryResults = await query.find({useMasterKey:true});
      const results=[]
      for (let i = 0; i < queryResults.length; ++i) {
        
        results.push({
          "name":queryResults[i].attributes.name,
          "owner":queryResults[i].attributes.owner,
          "tokenId":queryResults[i].attributes.tokenId,
          "description":queryResults[i].attributes.description,
          "metadataFilePath":queryResults[i].attributes.metadataFilePath,
          "tokenAddress":queryResults[i].attributes.tokenAddress,
          "image":queryResults[i].attributes.image,

      });
      }
      return results
 })


  Moralis.Cloud.define("getCootiesSongbirdById", async (request) => {
  
    const query = new Moralis.Query("PlanetsSongbird");
        const tokenId = request.params.tokenId;
  
       query.equalTo("tokenId", tokenId);
       query.equalTo("tokenAddress", request.params.tokenAddress);
       const queryResult = await query.first();
  
        if (!queryResult) return {};
      return { 
        "name":queryResult.attributes.name,
          "owner":queryResult.attributes.owner,
          "tokenId":queryResult.attributes.tokenId,
          "description":queryResult.attributes.description,
          "metadataFilePath":queryResult.attributes.metadataFilePath,
          "tokenAddress":queryResult.attributes.tokenAddress,
          "image":queryResult.attributes.image,
        };
  });
 Moralis.Cloud.define("getCootieMetadata", async (request) => {
    const query = new Moralis.Query("CootiesMetadata");
       const tokenId = request.params.name;
 
      query.equalTo("name", tokenId);
      const queryResult = await query.first();
 
       if (!queryResult) return {};
     return {
        "name":queryResult.attributes.name,
       "owner":queryResult.attributes.owner,
       "cootieId":queryResult.attributes.cootieId,
       "gender":queryResult.attributes.gender,
       "description":queryResult.attributes.description,
       "metadataFilePath":queryResult.attributes.metadataFilePath,
       "image":queryResult.attributes.image,
       "background":queryResult.attributes.background,
       "hairs":queryResult.attributes.hairs,
       "eyebrows":queryResult.attributes.eyebrows,
       "shirts":queryResult.attributes.shirts,
       "eyeColors":queryResult.attributes.eyeColors,
       "skins":queryResult.attributes.skins,
       "random":queryResult.attributes.random,
       "face":queryResult.attributes.face,
       "facialHairs":queryResult.attributes.facialHairs,
       "teeth":queryResult.attributes.teeth,
       "pants":queryResult.attributes.pants,
       "shoes":queryResult.attributes.shoes,
       "handheld":queryResult.attributes.handheld,
       "logos":queryResult.attributes.logos,
       };
 });
  Moralis.Cloud.define("getAllCootieSongbird", async (request) => {
    const query = new Moralis.Query("ItemsMintedSongbird");
 
      const queryResult = await query.find({skip:request.params.skip});
 
       if (!queryResult) return {};
     return {
       "name":queryResult.attributes.name,
       "owner":queryResult.attributes.owner,
       "cootieId":queryResult.attributes.cootieId,
       "description":queryResult.attributes.description,
       "metadataFilePath":queryResult.attributes.metadataFilePath,
       "image":queryResult.attributes.image,
       };
 })
 Moralis.Cloud.define("getCootieSongbirdByIdV1", async (request) => {
   
 
   const query = new Moralis.Query("CootiesV1");
    const tokenId = request.params.cootieId;
 
      query.equalTo("tokenId", tokenId);
      const queryResult = await query.first();
 
       if (!queryResult) return {};
     return {
       "name":queryResult.attributes.name,
       "cootieId":queryResult.attributes.cootieId,
       "owner":queryResult.attributes.owner,
       "description":queryResult.attributes.description,
       "metadataFilePath":queryResult.attributes.metadataFilePath,
       "image":queryResult.attributes.image,
       };
 })
  Moralis.Cloud.define("getCootieSongbirdById", async (request) => {
    
  
    const query = new Moralis.Query("ItemsMintedSongbird");
     const tokenId = request.params.cootieId;
  
       query.equalTo("cootieId", tokenId);
       const queryResult = await query.first();
  
        if (!queryResult) return {};
      return {
        "name":queryResult.attributes.name,
        "cootieId":queryResult.attributes.cootieId,
        "owner":queryResult.attributes.owner,
        "description":queryResult.attributes.description,
        "metadataFilePath":queryResult.attributes.metadataFilePath,
        "image":queryResult.attributes.image,
        };
  });
  Moralis.Cloud.define("setCootieNewOwnerSongbirdV1", async (request) => {
    const query = new Moralis.Query("CootiesV1");
       const cootie = request.params.tokenId;
 
      query.equalTo("cootieId", cootie);
      const queryResult = await query.first({useMasterKey:true});
 
       if (!queryResult) return {};
   
   queryResult.set('owner',request.params.newOwner)
     
   await queryResult.save()
 
 })
  Moralis.Cloud.define("setCootieNewOwnerSongbird", async (request) => {
    const query = new Moralis.Query("ItemsMintedSongbird");
       const cootie = request.params.tokenId;
 
      query.equalTo("cootieId", cootie);
      const queryResult = await query.first({useMasterKey:true});
 
       if (!queryResult) return {};
   
   queryResult.set('owner',request.params.newOwner)
     
   await queryResult.save()
 
 });

    Moralis.Cloud.define("getMyItemsSongbird", async (request) => {
      
        const query = new Moralis.Query("ItemsMintedSongbird");
        query.equalTo("owner", request.params.owner);
        
        
       const queryResults = await query.find({useMasterKey:true});
        const results=[]
        for (let i = 0; i < queryResults.length; ++i) {
          
          results.push({
          "name":queryResults[i].attributes.name,
          "owner":queryResults[i].attributes.owner,
          "description":queryResults[i].attributes.description,
          "metadataFilePath":queryResults[i].attributes.metadataFilePath,
          "image":queryResults[i].attributes.image,

        });
        }
        return results
      });

      
  Moralis.Cloud.define("getTotalItemsSongbird", async (request) => {
    
    const query = new Moralis.Query("ItemsMintedSongbird");
      
      return query.count();
  });
  Moralis.Cloud.define("getItemSongbird", async (request) => {
    
    const query = new Moralis.Query("ItemsMintedSongbird");
        const tokenId = request.params.tokenId;
  
      query.equalTo("cootieId", tokenId);
    
    const queryResult = await query.first({useMasterKey:true});
  
        if (!queryResult) return {};
      return {
        "name":queryResult.attributes.name,
     "owner":queryResult.attributes.owner,
     "description":queryResult.attributes.description,
     "metadataFilePath":queryResult.attributes.metadataFilePath,
     "metadataFileHash":queryResult.attributes.metadataFileHash,
     "image":queryResult.attributes.image,
    
        };
  });
  Moralis.Cloud.define("getItemsSongbird", async (request) => {
      
    const query = new Moralis.Query("ItemsMintedSongbird");
    
   const queryResults = await query.find({useMasterKey:true});
    const results=[]
    for (let i = 0; i < queryResults.length; ++i) {
      
      results.push({
      "name":queryResults[i].attributes.name,
      "description":queryResults[i].attributes.description,
      "metadataFilePath":queryResults[i].attributes.metadataFilePath,
      "metadataFileHash":queryResults[i].attributes.metadataFileHash,
      "image":queryResults[i].attributes.image,
       
    });
    }
    return results
  });

module.exports = __webpack_exports__;
/******/ })()
;