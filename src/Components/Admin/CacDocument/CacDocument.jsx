import React, { useContext, useEffect, useState } from 'react'
import "./CacDocument.css"
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { TiArrowLeft } from "react-icons/ti";
import DocViewer from "react-doc-viewer";
import { HandiworkContext } from '../../Context/HandiworkContext';




function CacDocument({ provider }) {

  const { providerId } = useParams();

  const [loading, setLoading] = useState(true)

  //funtions for the admin to either accept or reject verification file

    async function adminApprove(){

      const url = `https://handiworks.cosmossound.com.ng/api/verify-providers/verification-status/${providerId}`
    
      try {
          
        const response = await axios.put(url,
              { action: "accept" },
              { headers: { 'Content-Type': 'application/json' } }
          )
    
      }catch (dupError) {
          console.log("caughtError:", dupError.message)
    
      }  
  }

  async function adminReject(){

      const url = `https://handiworks.cosmossound.com.ng/api/verify-providers/verification-status/${providerId}`
    
      try {
          
        const response = await axios.put(url,
              { action: "reject" },
              { headers: { 'Content-Type': 'application/json' } }
          )
    
      }catch (dupError) {
          console.log("caughtError:", dupError.message)
      }  
  }

  //To fetch provider document
  const [providerDocument, setProviderDocument] = useState({})
  console.warn("providerDocument:", providerDocument)

  const [pdfUrl, setPdfUrl] = useState('');
  console.warn("pdfUrl:", pdfUrl)


  const [fileFormat, setFileFormat] = useState('');
  console.warn("fileFormat:", fileFormat)

    let fileUrl = `https://handiworks.cosmossound.com.ng/${providerDocument ? providerDocument.cacImagePath : ""}`;

    console.warn("fileUrl:", fileUrl)

    const docs = [
      { uri: pdfUrl,
        fileType: "pdf",
        fileName: "verification.pdf",
      },
    ];

    
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
                setFileFormat('pdf');
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


  return (
    <div className='cacDoc'>

        <div className="cacContainer">
        { loading ? <div>Loading...</div> :
            <div className="sender">Service Provider:
              <span>{providerDocument !==null ? providerDocument.firstName.charAt(0).toUpperCase()
              + providerDocument.firstName.slice(1)
              
             + " " + providerDocument.lastName.charAt(0).toUpperCase()+ providerDocument.lastName.slice(1)
             : ""}</span>
            </div>
          }
             

            <div className="cacWrapper">

                {
                    fileFormat == "pdf" ? 

                    <div className="image-viewer">

                        { loading ? <div>Loading...</div> :

                            <DocViewer 
                              documents={docs}
                            />

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
                    <button className='approve' onClick={adminApprove}>Approve</button>
                    <button className='reject' onClick={adminReject}>Reject</button>
                </div>
            </div>
        </div>

        <Link to="/admin/dashboard"><TiArrowLeft className='arrow' /> Back to dashboard</Link>
    </div>
  )
}

function CacDocumentView({ provider }) {

  const { providerId } = useParams();

  const [loading, setLoading] = useState(true)


  //To fetch provider document
  const [providerDocument, setProviderDocument] = useState({})
  console.warn("providerDocument:", providerDocument)

  const [pdfUrl, setPdfUrl] = useState('');
  console.warn("pdfUrl:", pdfUrl)


  const [fileFormat, setFileFormat] = useState('');
  console.warn("fileFormat:", fileFormat)

    let fileUrl = `https://handiworks.cosmossound.com.ng/${providerDocument ? providerDocument.cacImagePath : ""}`;

    console.warn("fileUrl:", fileUrl)

    const docs = [
      { uri: pdfUrl,
        fileType: "pdf",
        fileName: "verification.pdf",
      },
    ];

    
    //To fetch provider
    const url = `https://handiworks.cosmossound.com.ng/api/verify-providers/verify-skill-details/${providerId}`

    useEffect(()=>{
          axios.get(url)
          .then(res => {
            setLoading(false)
            setProviderDocument(res.data)

            const fileExtension = fileUrl.slice(-3);
            console.warn("fileExtension:", fileExtension)
            if (fileExtension === 'pdf') {
                setFileFormat('pdf');
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


  return (
    <div className='cacDoc'>

        <div className="cacContainer">
        { loading ? <div>Loading...</div> :
            <div className="sender">Service Provider:
              <span>{providerDocument !==null ? providerDocument.firstName.charAt(0).toUpperCase()
              + providerDocument.firstName.slice(1)
              
             + " " + providerDocument.lastName.charAt(0).toUpperCase()+ providerDocument.lastName.slice(1)
             : ""}</span>
            </div>
          }
             

            <div className="cacWrapper">

                {
                    fileFormat == "pdf" ? 

                    <div className="image-viewer">

                        { loading ? <div>Loading...</div> :

                            <DocViewer 
                              documents={docs}
                            />

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
                
            </div>
        </div>

        <Link to="/admin/dashboard"><TiArrowLeft className='arrow' /> Back to dashboard</Link>
    </div>
  )
}

export {CacDocument, CacDocumentView}
