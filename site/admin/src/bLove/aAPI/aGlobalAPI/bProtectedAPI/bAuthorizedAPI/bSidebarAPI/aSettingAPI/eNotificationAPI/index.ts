import apiConnection from "@/aConnection/cAPIConnection";


const notificationAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    notificationListAPI: builder.query({
      query: () => ({
        url: `/notification/list/`,
        method: "GET",
      }),
      providesTags: ["notificationList"]
    }),

    notificationCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/notification/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["notificationList"]
    }),

    notificationRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/notification/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "notificationRetrieve", id: data.params._id }
      ]
    }),

    notificationUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/notification/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "notificationList" },
        { type: "notificationRetrieve", id: data.params._id }
      ]
    }),

    notificationDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/notification/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "notificationList" },
        { type: "notificationRetrieve", id: data.params._id }
      ]
    })

  })
})

export default notificationAPIEndpoint;
