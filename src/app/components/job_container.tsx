import Image from "next/image"

/*Props for the job container*/
export interface ContainerProps {
    Title: string;
    Company: string;
    Location: string;
    Industry: string;
    Salary: string;
    Type: string;
    imageSrc: string;
    Experience: string;
  }

  
export default function({ Title, Company, Location, Industry, Salary, Type, imageSrc, Experience }: ContainerProps){
    // Function to determine background color based on Industry
  const getBgColor = (industry: string) => {
    switch (industry.toLowerCase()) {
      case "fintech":
        return "bg-orange-500";
      case "hospitality":
        return "bg-red-300";
      case "marketing":
        return "bg-yellow-500";
      case "education":
        return "bg-green-500";
      case "it":
        return "bg-purple-400";
      case "manufacturing":
            return "bg-green-800";
      default:
        return "bg-blue-800"; // Default color
    }
  };

  const bgColor = getBgColor(Industry);
    return(
        <section className={`rounded-2xl w-1/5 m-2 container`} style={{ width: '250px', height: '300px' }}>
            <aside className={`rounded-tl-xl rounded-tr-xl w-full h-8 ${bgColor}`}>
                <h1 className="text-white uppercase font-bold text-center p-1">{Industry}</h1>
            </aside>

            <div className=" bg-white cursor-pointer">
                <div className="flex">
                    <div className="m-3">
                        <h1 className="font-semibold text-md">{Title}</h1>
                        <h1 className="text-sm">{Company}</h1>
                    </div>

                    <Image src={imageSrc} width={80} height={80} alt={'CompanyLogo'}/>
                </div>

                <div className="m-3">
                    <h1><b className="mr-7">Location:</b>{Location}</h1>
                    <h1><b className="mr-12">Salary:</b>{Salary}</h1>
                    <h1><b className="mr-6">Job Type:</b>{Type}</h1>
                    <h1><b className="mr-2">Experience:</b> {Experience}</h1>
                </div>
                
                <h1 className="underline font-semibold text-blue-500 mx-3 cursor-pointer hover:text-red-500">View details</h1>
                <br />
            </div>

            <aside className={`rounded-bl-xl rounded-br-xl w-full h-8 ${bgColor}`}>
                <h1 className="text-white uppercase font-bold text-center p-1">{Industry}</h1>
            </aside>
        </section>
    )
}