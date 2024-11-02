"use client"
import { useState } from "react"

const UploadImage = () => {
    const [file, setFile] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(file); 
        if (!file) {
            alert("Please select the file");
            return
        }
        const data = new FormData();
        data.append('file', file);
        try {
            let result = await fetch('/api/upload-image', {
                method: "POST",
                body: data
            })
            result = await result.json();
            if (result.success) {
                alert("Successfully upload")
            } else {
                alert("Failed")
            }
        } catch (error) {
            console.log(error);
            alert("Failed")
        }
    }

    return (
        <>
            <h2>Upload Image in Next JS</h2>
            <form onSubmit={handleSubmit}> {/* Changed from onClick to onSubmit */}
                <input
                    type="file"
                    name="file"
                    onChange={(e) => setFile(e.target.files?.[0])} // Updates file state with selected file
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UploadImage
