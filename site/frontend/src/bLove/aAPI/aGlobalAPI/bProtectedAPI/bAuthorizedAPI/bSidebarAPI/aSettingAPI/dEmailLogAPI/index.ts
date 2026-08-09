import apiConnection from "@/aConnection/cAPIConnection";


const emailLogAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    emailLogListAPI: builder.query({
      query: () => ({
        url: `/email-log/list/`,
        method: "GET",
      }),
      providesTags: ["emailLogList"]
    }),

    emailLogCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/email-log/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["emailLogList"]
    }),

    emailLogRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/email-log/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "emailLogRetrieve", id: data.params._id }
      ]
    }),

    emailLogUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/email-log/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "emailLogList" },
        { type: "emailLogRetrieve", id: data.params._id }
      ]
    }),

    emailLogDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/email-log/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "emailLogList" },
        { type: "emailLogRetrieve", id: data.params._id }
      ]
    })

  })
})

export default emailLogAPIEndpoint;
