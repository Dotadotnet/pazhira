import { technosaraApi } from "../technosara";

const FeatureApi = technosaraApi.injectEndpoints({
  endpoints: (builder) => ({
    // add new icon
    addFeature: builder.mutation({
      query: (body) => ({
        url: "/feature/add",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),
    }),

    // get all icons
    getFeatures: builder.query({
      query: ({ page = 1, limit = 5, search = "" } = {}) => ({
        url: `/feature/get-all?page=${page}&limit=${limit}&search=${search}`,
        method: "GET",
      }),
    }),

    // update icon
    updateFeature: builder.mutation({
      query: ({ id, body }) => ({
        url: `/feature/update/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),
    }),

    // get a icon
    getFeature: builder.query({
      query: (id) => ({
        url: `/feature/get/${id}`,
        method: "GET",
      }),
    }),

    // delete a icon
    deleteFeature: builder.mutation({
      query: (id) => ({
        url: `/feature/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
  }),
});

export const {
  useAddFeatureMutation,
  useGetFeaturesQuery,
  useUpdateFeatureMutation,
  useGetFeatureQuery,
  useDeleteFeatureMutation,
} = FeatureApi;
