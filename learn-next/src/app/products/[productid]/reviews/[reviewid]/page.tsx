import NotFound, { notFound } from "next/navigation";

export default function ReviewDetail({params}: {
      params: {
            productid: string;
            reviewid: string;
      }
}){
      if(parseInt(params.reviewid) > 1000){
            notFound();
      }
      return <h1>Review - {params.reviewid} for product {params.productid}</h1>
}