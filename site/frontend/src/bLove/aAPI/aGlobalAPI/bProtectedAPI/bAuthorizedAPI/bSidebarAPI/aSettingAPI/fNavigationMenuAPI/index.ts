import apiConnection from "@/aConnection/cAPIConnection";


const navigationMenuAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    navigationMenuListAPI: builder.query({
      query: () => ({
        url: `/navigation-menu/list/`,
        method: "GET",
      }),
      providesTags: ["navigationMenuList"]
    }),

    navigationMenuCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/navigation-menu/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["navigationMenuList"]
    }),

    navigationMenuRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/navigation-menu/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "navigationMenuRetrieve", id: data.params._id }
      ]
    }),

    navigationMenuUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/navigation-menu/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "navigationMenuList" },
        { type: "navigationMenuRetrieve", id: data.params._id }
      ]
    }),

    navigationMenuDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/navigation-menu/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "navigationMenuList" },
        { type: "navigationMenuRetrieve", id: data.params._id }
      ]
    })

  })
})

export default navigationMenuAPIEndpoint;
