"use client"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

export default function ProjectCard() {
  return (
    <Card className="max-w-[400px] bg-gray-900 p-4 rounded-2xl">
      <CardHeader className="flex gap-3 p-4">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-amber-50">HeroUI</p>
          <Link className="text-small text-default-500" href="heroui.com">heroui.com</Link>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="p-4 text-amber-50">Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link className="p-4 text-gray-500" isExternal href="https://github.com/heroui-inc/heroui">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
