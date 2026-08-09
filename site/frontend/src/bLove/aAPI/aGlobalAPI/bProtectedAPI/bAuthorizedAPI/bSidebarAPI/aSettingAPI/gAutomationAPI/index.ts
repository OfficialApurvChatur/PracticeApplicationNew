import apiConnection from "@/aConnection/cAPIConnection";


const automationAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    automationListAPI: builder.query({
      query: () => ({
        url: `/automation/list/`,
        method: "GET",
      }),
      providesTags: ["automationList"]
    }),

    automationCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/automation/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["automationList"]
    }),

    automationRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/automation/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "automationRetrieve", id: data.params._id }
      ]
    }),

    automationUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/automation/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "automationList" },
        { type: "automationRetrieve", id: data.params._id }
      ]
    }),

    automationDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/automation/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "automationList" },
        { type: "automationRetrieve", id: data.params._id }
      ]
    })

  })
})

export default automationAPIEndpoint;
