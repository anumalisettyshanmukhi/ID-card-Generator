import React , {useState}from 'react'
import './idcard.css';
function IdCard(){
    const [formData, setFormData]= useState({
        name:'',
        dob:'',
        position:'',
        idnumber:'',
        issueDate:'',
        expiryDate:'',
        companyName:'Vignan Institute',
        companyService:'Education Platform'
    })
    const [Image,setImage]=useState(null)

    const handleChange =(e)=>{
        const{name,value}=e.target
        setFormData({...formData,[name]:value})
    }

    const handleImageUpload=(event)=>{
        const file=event.target.files[0] //get the first selected file
        if(file){
            const imageUrl=URL.createObjectURL(file)
            //create a temporary url
            setImage(imageUrl)
        }
    }
    return(
        <>
        <div className='container'>
        <center><h1 className='heading'>ID CARD GENERATOR</h1></center> 
            <div className='form'>
                <input type='text' name="name" value={formData.name}
                placeholder='Name' onChange={handleChange}/>
                <input type='date' name="dob" value={formData.dob}
                placeholder='Date of Birth' onChange={handleChange} />
                <input type='text' name="position" value={formData.position}
                placeholder='course' onChange={handleChange} />
                <input type='text' name="idnumber" value={formData.idnumber}
                placeholder='ID Number' onChange={handleChange}/>
                <input type='month' name="issueDate" value={formData.issueDate}
                placeholder='Issue Date' onChange={handleChange} />
                 <input type='month' name="expiryDate" value={formData.expiryDate}
                placeholder='Expiry Date'  onChange={handleChange}/>
                 <input type='file' accept='image/*' onChange={handleImageUpload} />
                
            </div>
            <div className='card-preview'>
                <div className='id-card'>
                    <div className='card-content'>
                    <div>
                        <img src={Image} alt='noImage' height="100" width="100" />
                        <h3 style={{textAlign:"center"}}>Photo</h3>
                    </div>
                    <div className='details'>
                     <p><strong>Name:</strong>{formData.name}</p>   
                     <p><strong>D.O.B:</strong>{formData.dob}</p>  
                     <p><strong>Course:</strong>{formData.position}</p>  
                     <p><strong>ID No:</strong>{formData.idnumber}</p>  
                     <p><strong>Issued:</strong>{formData.issueDate}</p>  
                     <p><strong>Expiries:</strong>{formData.expiryDate}</p>  
                    </div>
                    </div>
                    <div className='company'> 
                    <h3>{formData.companyName}</h3>
                    <p>{formData.companyService}</p>
                    </div>
                </div>
            </div>
        </div>
        </>

    )

}
export default IdCard;