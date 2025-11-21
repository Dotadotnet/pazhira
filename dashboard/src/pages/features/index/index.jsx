import ControlPanel from "@/pages/ControlPanel";
import React, { useState, useEffect, useMemo } from "react";
import Edit from "@/components/icons/Edit";
import AddButton from "@/components/shared/button/AddButton";

// import UpdateFeature from "./Update";
import DeleteModal from "@/components/shared/modal/DeleteModal";
import { toast } from "react-hot-toast";
import SkeletonItem from "@/components/shared/skeleton/SkeletonItem";
import StatusIndicator from "@/components/shared/tools/StatusIndicator";
import Pagination from "@/components/shared/pagination/Pagination";
import Search from "@/components/shared/search";
import { useDeleteFeatureMutation, useGetFeaturesQuery } from "@/services/feature/featureApi";

const Features = () => {
  const [reloadKey, setReloadKey] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { data, isLoading, error, refetch } = useGetFeaturesQuery({
    page: currentPage,
    limit: itemsPerPage,
    status: statusFilter === "all" ? undefined : statusFilter,
    search: searchTerm
  });

  const [deleteFeature, { isLoading: isDeleting }] = useDeleteFeatureMutation();
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 1;
  const features = useMemo(() => data?.data || [], [data]);



  useEffect(() => {
    if (isLoading)
      toast.loading("در حال دریافت نمادها...", { id: "features-loading" });
    if (data && !isLoading) toast.dismiss("features-loading");
    if (data && data.acknowledgement) {
      toast.success(data.description, { id: "features-loading" });
    }

    if (error?.data) toast.error(error.data.message, { id: "features-loading" });
  }, [data, error, isLoading]);

  return (
    <ControlPanel>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="pr-6">
        <AddButton link="./add" />
      </div>
      <div className="mt-8 w-full grid grid-cols-12 text-slate-400 px-4 ">
        <div className="col-span-4 lg:col-span-4  text-sm">
          <span className="hidden lg:flex">نویسنده</span>
          <span className="flex lg:hidden">نویسنده و عنوان</span>
        </div>
        <div className="col-span-5 lg:col-span-3  lg:flex  text-sm">
          نام
        </div>

        <div className="col-span-3 lg:col-span-3 hidden lg:flex  text-sm">
          شناسه
        </div>

        <div className="lg:col-span-2 col-span-3 md:block text-sm">عملیات</div>
      </div>

      {/* لیست */}
      {isLoading || features.length === 0 ? (
        <SkeletonItem repeat={5} />
      ) : (
        features.map((feature) => (
          <div
            key={feature._id}
            className="mt-4 p-2 grid grid-cols-12 rounded-xl min-h-25 border border-gray-200 gap-2 dark:border-white/10 dark:bg-slate-800 bg-white transition-all dark:hover:border-slate-700 hover:border-slate-100 hover:bg-green-50/50 dark:hover:bg-gray-900 dark:text-slate-100"
          >
            <div className="col-span-4 lg:col-span-4 text-center flex items-center">
              <StatusIndicator isActive={feature.status === "active"} />
              <div className="py-2 flex justify-center items-center gap-x-2 text-right">
                <img
                  src={feature?.creator?.avatar?.url || "/placeholder.png"}
                  alt="avatar"
                  className="h-[60px] w-[60px] rounded-full object-cover"
                />
                <article className="flex-col flex gap-y-2">
                  <span className="line-clamp-1 text-base">
                    <span className="hidden lg:flex">
                      {feature?.creator?.name}
                    </span>
                    <span className="lg:hidden">{feature?.title}</span>
                  </span>
                  <span className="text-xs hidden lg:flex">
                    {new Date(feature.createdAt).toLocaleDateString("fa-IR")}
                  </span>
                  <div
                    className="text-sm lg:text-base lg:hidden   overflow-hidden w-8 h-8  block "
                    dangerouslySetInnerHTML={{ __html: feature?.symbol }}
                  ></div>
                </article>
              </div>
            </div>

            <div className="col-span-5 lg:col-span-3 flex  text-right items-center">
              <span className="text-sm lg:text-base   text-ellipsis block">
                {feature?.nameFa}
              </span>
            </div>

            <div className="col-span-3 lg:col-span-3 lg:flex hidden  text-right items-center">
              <span className="text-sm lg:text-base p-1 block ">
                {feature?.nameEn}
              </span>
            </div>

            <div className="lg:col-span-2 col-span-3 gap-2 text-center flex  md:items-center items-left">
              <article className=" flex  gap-x-2 justify-left items-center gap-y-2">
                {/* <UpdateFeature id={feature._id} /> */}
                <a
                  type="button"
                  className="edit-button"
                  href={"/features/" + feature.featureId}
                >
                  <Edit className="w-5 h-5" />
                </a>

                <DeleteModal
                  message="آیا از حذف این نماد اطمینان دارید؟"
                  isLoading={isDeleting}
                  onDelete={() => {
                    deleteFeature(feature._id)
                    toast.success("نوع ویژگی با موفقیت حذف شد");
                    location.reload()
                  }}
                />
              </article>
            </div>
          </div>
        ))
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </ControlPanel>
  );
};

export default Features;
