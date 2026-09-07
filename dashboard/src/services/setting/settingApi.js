
import { technosaraApi } from "../technosara";

const SettingApi = technosaraApi.injectEndpoints({
  endpoints: (builder) => ({
  
    // get all icons
    getSettings: builder.query({
      query: () => ({
        url: `/settings/admin-get-all`,
        method: "GET",
         headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),

    // update icon
    updateSetting: builder.mutation({
      query: ({ id, body }) => ({
        url: `/settings/update/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),
    }),

    
  }),
});

export const {
  useGetSettingsQuery,
  useUpdateSettingMutation
} = SettingApi;
