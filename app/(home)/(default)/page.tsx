"use client"
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { defaultBlog } from "@/lib/data";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import Home from "./Homepage";
import { createEmail } from "@/lib/actions/blog";
import { EmailFormschemaType } from "@/app/dashboard/blog/schema";
import { useRouter } from "next/navigation";
import { defaultEmail } from "@/lib/data";

export default function CreateForm() {
	const router = useRouter();

	const onHandleSubmit = async (data: EmailFormschemaType) => {
		console.log("submit button pressed")
		try {
			const result = await createEmail(data);	
			if (!result) {
				throw new Error("No response received from server.");
			}
	
			const parsedResult = result;
	
			const { error } = parsedResult as PostgrestSingleResponse<null>;
			if (error?.message) {
				toast({
					title: "Fail to add  the email 😢",
					description: (
						<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
							<code className="text-white">{error.message}</code>
						</pre>
					),
				});
			} else {
				toast({
					title: "Successfully added your email🎉",
					description: data.email,
				});
				router.push("/thankyou");
			}
		} catch (error) {
			console.error("Error occurred while handling submit:", error);
			// Handle error appropriately, such as displaying an error message to the user
		}
	};
	return (
		<div className="">
<Home  onHandleSubmit={onHandleSubmit}
			defaultEmail={defaultEmail}/>
			</div>
	);

}
