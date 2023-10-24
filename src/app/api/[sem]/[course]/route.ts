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
    
    const urls = {}
    for (let i = 0; i < data.length; i++) {
      const code = data[i];
      
      if (code.type === "file") {
        urls[code.name] = code.download_url;
      }
    }
    

    const codes = {};
    try {
      const fetchAllCode = async () => {
        for (const title of Object.keys(urls)) {                             
          const response = await fetch(urls[title]); 
          const data = await response.text();                            

          codes[title] = JSON.stringify(data);
          
          
          
        }
      }
      await fetchAllCode();
    } catch (error) {
      console.log("error")
    }    
          
    return NextResponse.json(codes, {status: 200})
  }