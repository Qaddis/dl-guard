import { mtls } from "@/data"
import Product from "./Product"

export default function ProductPage({
	params
}: {
	params: { product: string }
}) {
	const data = mtls.find(item => item.title.toLowerCase() === params.product)

	if (data) return <Product {...data} />
	else
		return (
			<Product
				title="none"
				description="none"
				howWork="none"
				techs={["none"]}
			/>
		)
}
