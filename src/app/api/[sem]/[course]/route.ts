import { NextResponse } from "next/server";

export async function GET(
    _req: Request,
    { params }: { params: any },
  ) 
  {
    const {sem, course} = params;
    const url=`https://api.github.com/repos/ashikjhonson/KTU-CSE/contents/S${sem}/${course}`;
    const response = await fetch(url);
    const data = await response.json();
    
    console.log("Okay here")
    // const urls = data.reduce((item, code)=>{      
    //   if(code.type==="file"){
    //     item[code.name] = code.download_url;        
    //     return item;
    //   }
    // }, {})
    const urls = {}
    for (let i = 0; i < data.length; i++) {
      const code = data[i];
      // console.log(code)
      if (code.type === "file") {
        urls[code.name] = code.download_url;
        // console.log(code.name)
        // console.log(code.download_url)

      }
    }
    console.log(urls)

    const codes = {};
    try {
      const fetchAllCode = async () => {
        for (const title of Object.keys(urls)) {                   
          console.log("title");
          const response = await fetch(urls[title]); 
          const data = await response.text();
          data !== null ? console.log("data") : console.log('Data is null');
         
          // console.log(data)
          
          codes[title] = JSON.stringify(data);//JSON.stringify(data);
          
        }
      }
      await fetchAllCode();
    } catch (error) {
      console.log("error")
    }
    console.log(codes);
          
    return NextResponse.json(codes, {status: 200})
  }