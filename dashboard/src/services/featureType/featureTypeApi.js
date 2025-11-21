import { technosaraApi } from "../technosara";

const FeatureTypeApi = technosaraApi.injectEndpoints({
  endpoints: (builder) => ({
    // add new icon
    addFeatureType: builder.mutation({
      query: (body) => ({
        url: "/feature-type/add",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),
    }),

    // get all icons
    getFeatureTypes: builder.query({
      query: ({ page = 1, limit = 5, search = "" } = {}) => ({
        url: `/feature-type/get-all?page=${page}&limit=${limit}&search=${search}`,
        method: "GET",
      }),
    }),

    // update icon
    updateFeatureType: builder.mutation({
      query: ({ id, body }) => ({
        url: `/feature-type/update/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),
    }),

    // get a icon
    getFeatureType: builder.query({
      query: (id) => ({
        url: `/feature-type/get/${id}`,
        method: "GET",
      }),
    }),

    // delete a icon
    deleteFeatureType: builder.mutation({
      query: (id) => ({
        url: `/feature-type/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
  }),
});

export const {
  useAddFeatureTypeMutation,
  useGetFeatureTypesQuery,
  useUpdateFeatureTypeMutation,
  useGetFeatureTypeQuery,
  useDeleteFeatureTypeMutation,
} = FeatureTypeApi;
