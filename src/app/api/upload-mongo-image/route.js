import { connectionString } from "@/lib/database/db_connection";
import { Image } from "@/lib/database/model/image";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        // Check if already connected to MongoDB
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        }

        // Retrieve form data
        const data = await request.formData();
        const file = data.get('file');

        if (!file) {
            return NextResponse.json({ success: false, response: "No file provided" });
        }

        // Convert file to buffer
        const bufferData = await file.arrayBuffer();
        const buffer = Buffer.from(bufferData);

        // Create new image document
        const newImage = new Image({
            name: file.name,
            data: buffer,
            contentType: file.type
        });

        // Save to MongoDB
        await newImage.save();

        return NextResponse.json({ response: "File uploaded successfully", success: true });
    } catch (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json({ response: "File upload failed", success: false });
    }
};
