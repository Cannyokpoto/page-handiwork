import React, { useContext, useEffect, useState } from 'react'
import "./CacDocument.css"
import { IoMdClose } from "react-icons/io";
import { HandiworkContext } from '../Context/HandiworkContext';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { TiArrowLeft } from "react-icons/ti";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Document, Page, pdfjs } from 'react-pdf';
import 'pdfjs-dist/build/pdf.worker.entry';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function CacDocument({ provider }) {

    // const {toggleCacView} = useContext(HandiworkContext)


    const { providerId } = useParams();

    const [loading, setLoading] = useState(true)
    

     //To fetch provider document
  const [providerDocument, setProviderDocument] = useState({})
  console.warn("providerDocument:", providerDocument)

  const [pdfUrl, setPdfUrl] = useState('');
  console.warn("pdfUrl:", pdfUrl)


  const [fileType, setFileType] = useState('');
  console.warn("fileType:", fileType)

    let fileUrl = `https://handiworks.cosmossound.com.ng/${providerDocument ? providerDocument.cacImagePath : ""}`;

    console.warn("fileUrl:", fileUrl)


    //To fetch provider
    const url = `https://handiworks.cosmossound.com.ng/api/verify-providers/verify-skill-details/${providerId}`

    useEffect(()=>{
          axios.get(url)
          .then(res => {
            setLoading(false)
            setProviderDocument(res.data)

            // const fileExtension = fileUrl.split('.').pop().toLowerCase();
            const fileExtension = fileUrl.slice(-3);
            console.warn("fileExtension:", fileExtension)
            if (fileExtension === 'pdf') {
                setFileType('pdf');

                setPdfUrl(fileUrl)
                
              }
              
              
              else {
                setFileType('image');
              }
              

          })
          .catch((dupError) => {
            setLoading(false)
            console.log("caughtError:", dupError)
          })
  
    },[providerId, fileUrl])

    // useEffect(()=>{
        
    // })



  return (
    <div className='cacDoc'>
        {/* <IoMdClose className="cacClose" onClick={toggleCacView}/>  */}

        <div className="cacContainer">
            <div className="sender">{providerDocument !==null ? providerDocument.firstName
             + " " + providerDocument.lastName
             : ""}</div>
             

            <div className="cacWrapper">

                {
                    fileType == "pdf" ? 

                    <div className="cac-viewer">
                        { loading ? <div>Loading...</div> :

                        // <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                            
                            
                        //     <Viewer fileUrl={pdfUrl} />
                        // </Worker>

                        
                        <Document file={pdfUrl}>
                            <Page pageNumber={1} />
                        </Document>
                            }
                    </div> :

                    <div className="image-viewer">
                        { loading ? <div>Loading...</div> :
                            <img 
                            src={`https://handiworks.cosmossound.com.ng/${providerDocument.cacImagePath}`}
                            alt="verification image" />
                        }
                    </div>
                }
                

                <div className="actionBtn">
                    <button className='approve'>Approve</button>
                    <button className='reject'>Reject</button>
                </div>
            </div>
        </div>

        <Link to="/admin/dashboard"><TiArrowLeft className='arrow' /> Back to dashboard</Link>
    </div>
  )
}

export default CacDocument












// return (
//     <div>
//       {fileUrl ? (
//         fileType === 'pdf' ? (
//           <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js`}>
//             <div
//               style={{
//                 height: '750px',
//                 width: '100%',
//               }}
//             >
//               <Viewer fileUrl={fileUrl} />
//             </div>
//           </Worker>
//         ) : fileType === 'image' ? (
//           <img src={fileUrl} alt="User CAC Document" style={{ maxWidth: '100%' }} />
//         ) : (
//           <p>Unsupported file type</p>
//         )
//       ) : (
//         <p>Loading file...</p>
//       )}
//     </div>
//   );
