// import { NextResponse } from "next/server";
// import connectDB from "../../../../lib/connectDB";
// import User from "../../../../models/User";
// import bcrypt from "bcryptjs";

// export async function POST(request) {
//   try {
//     await connectDB();
//     const { email, password } = await request.json();
//     if (!email || !password) {
//       return NextResponse.json(
//         { message: "Email and password are required" },
//         { status: 400 }
//       );
//     }
//     const existingUser = await User.findOne({ email });
//     if (!existingUser) {
//       return NextResponse.json(
//         { message: "User not found" },
//         { status: 404 }
//       );
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await User.create({ username, password: hashedPassword });
//     return NextResponse.json(
//       { message: "User registered successfully" },
//       { status: 201 }
//     );
//   } 
//   catch (error) {
//     console.error("Login Error:", error);
//     return NextResponse.json(
//       { message: "Internal Server Error", error: error.message },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import connectDB from "../../../../lib/connectDB";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectDB();

    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id,
          email: user.email,
        },
      },
      { status: 201 }
    );
  } 
  catch (error) {
    console.log("Register Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}